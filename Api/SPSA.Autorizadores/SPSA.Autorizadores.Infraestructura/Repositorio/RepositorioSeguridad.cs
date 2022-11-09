﻿using Microsoft.Extensions.Configuration;
using Oracle.ManagedDataAccess.Client;
using SPSA.Autorizadores.Dominio.Contrato.Repositorio;
using SPSA.Autorizadores.Dominio.Entidades;
using System.Data;

namespace SPSA.Autorizadores.Infraestructura.Repositorio
{
    public class RepositorioSeguridad : IRepositorioSeguridad
    {
        private readonly IConfiguration _configuration;
        private readonly string _cadenaConexionSeguridad;
        private readonly int _commandTimeout;

        public RepositorioSeguridad(IConfiguration configuration)
        {
            _configuration = configuration;
            _cadenaConexionSeguridad = _configuration.GetConnectionString("Seguridad");
            _commandTimeout = Convert.ToInt32(_configuration["BDConfig:CommandTimeout"]);
        }

        public async Task<SegUsuario> Login(int codigoSistema, string usuario, string password, string abrSistema)
        {
            using OracleConnection connection = new(_cadenaConexionSeguridad);

            var command = new OracleCommand("TP_PKG_SEG_NEW.SP_LOGIN", connection)
            {
                CommandType = CommandType.StoredProcedure,
                CommandTimeout = _commandTimeout
            };

            await command.Connection.OpenAsync();
            command.Parameters.Add("pinnu_cod_sis", OracleDbType.Int32, codigoSistema, ParameterDirection.Input);
            command.Parameters.Add("pinvc_cod_usr", OracleDbType.NVarchar2, 20, usuario, ParameterDirection.Input);
            command.Parameters.Add("pinvc_pas_usr", OracleDbType.NVarchar2, 60, password, ParameterDirection.Input);
            command.Parameters.Add("pouvc_nom_usr", OracleDbType.NVarchar2, 120, null, ParameterDirection.Output);
            command.Parameters.Add("poucu_opciones", OracleDbType.RefCursor, 1, ParameterDirection.Output);
            command.Parameters.Add("pouvc_version", OracleDbType.NVarchar2, 20, null, ParameterDirection.Output);
            command.Parameters.Add("pouvc_user_bd", OracleDbType.NVarchar2, 60, null, ParameterDirection.Output);
            command.Parameters.Add("pouvc_pass_bd", OracleDbType.NVarchar2, 60, null, ParameterDirection.Output);
            command.Parameters.Add("pouvc_inst_bd", OracleDbType.NVarchar2, 60, null, ParameterDirection.Output);
            command.Parameters.Add("pounu_cod_tipu", OracleDbType.NVarchar2, 20, null, ParameterDirection.Output);
            command.Parameters.Add("POUVC_COD_EMP", OracleDbType.NVarchar2, 10, null, ParameterDirection.Output);
            command.Parameters.Add("pinvc_id_ses", OracleDbType.NVarchar2, 10, " ", ParameterDirection.Input);
            command.Parameters.Add("pinvc_abr_sis", OracleDbType.NVarchar2, 10, abrSistema, ParameterDirection.Input);

            await command.ExecuteNonQueryAsync();

            var segUsuario = new SegUsuario
            {
                Usuario = usuario,
                UserBd = command.Parameters["pouvc_user_bd"].Value.ToString(),
                PassBd = command.Parameters["pouvc_pass_bd"].Value.ToString(),
                InstBd = command.Parameters["pouvc_inst_bd"].Value.ToString(),
                Version = command.Parameters["pouvc_version"].Value.ToString(),
                CodEmp = command.Parameters["POUVC_COD_EMP"].Value.ToString(),
                UsuNombre = command.Parameters["pouvc_nom_usr"].Value.ToString(),
            };

            var dr = await command.ExecuteReaderAsync(CommandBehavior.CloseConnection);

            if (dr != null && dr.HasRows)
            {
                while (await dr.ReadAsync())
                {
                    segUsuario.Permisos.Add(new SegPermiso
                    {
                        CodPermiso = dr.IsDBNull(0) ? 0 : dr.GetInt32(0),
                        DesPermiso = dr.GetString(1),
                        TipoOpc = dr.IsDBNull(2) ? 0 : dr.GetInt32(2),
                        CodNiv2 = dr.GetString(3),
                        Nivel = dr.IsDBNull(4) ? 0 : dr.GetInt32(4),
                        AsigTip = dr.GetString(5),
                        AsigUsr = dr.GetString(6)
                    });
                }
            }
            return segUsuario;
        }
    }
}

using AutoMapper;
using SPSA.Autorizadores.Aplicacion.DTO;
using SPSA.Autorizadores.Dominio.Entidades;
using System;

namespace SPSA.Autorizadores.Aplicacion.Mappings
{
    public class AplicacionProfile : Profile
    {
        public AplicacionProfile()
        {
            CreateMap<SegUsuario, UsuarioDTO>();
        }
    }
}

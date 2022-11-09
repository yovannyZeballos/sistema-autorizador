using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SPSA.Autorizadores.Aplicacion.DTO
{
    public class UsuarioDTO
    {
        public UsuarioDTO()
        {
            Permisos = new List<PermisoDTO>();
        }
        public int CodigoSistema { get; set; }
        public string? Version { get; set; }
        public string? UserBd { get; set; }
        public string? PassBd { get; set; }
        public string? InstBd { get; set; }
        public string? Usuario { get; set; }
        public string? Password { get; set; }
        public string? CodEmp { get; set; }
        public string? UsuNombre { get; set; }
        public List<PermisoDTO> Permisos { get; set; }
    }
}

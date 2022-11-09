using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SPSA.Autorizadores.Aplicacion.DTO
{
    public class PermisoDTO
    {
        public int CodPermiso { get; set; }
        public string? DesPermiso { get; set; }
        public int TipoOpc { get; set; }
        public string? CodNiv2 { get; set; }
        public int Nivel { get; set; }
        public string? AsigTip { get; set; }
        public string? AsigUsr { get; set; }
    }
}

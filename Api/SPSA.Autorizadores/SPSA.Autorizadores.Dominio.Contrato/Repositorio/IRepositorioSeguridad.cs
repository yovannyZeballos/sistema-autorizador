using SPSA.Autorizadores.Dominio.Entidades;

namespace SPSA.Autorizadores.Dominio.Contrato.Repositorio
{
    public interface IRepositorioSeguridad
    {
        Task<SegUsuario> Login(int codigoSistema, string usuario, string password, string abrSistema);
    }
}

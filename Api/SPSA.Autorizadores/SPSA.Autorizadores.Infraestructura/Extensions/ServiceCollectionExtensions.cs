using Microsoft.Extensions.DependencyInjection;
using SPSA.Autorizadores.Dominio.Contrato.Repositorio;
using SPSA.Autorizadores.Infraestructura.Repositorio;

namespace SPSA.Autorizadores.Infraestructura.Extensions
{
    public static class ServiceCollectionExtensions
    {
        public static void AgregarCapaInfraestructura(this IServiceCollection services)
        {
            services.AddScoped<IRepositorioSeguridad, RepositorioSeguridad>();

        }
    }
}

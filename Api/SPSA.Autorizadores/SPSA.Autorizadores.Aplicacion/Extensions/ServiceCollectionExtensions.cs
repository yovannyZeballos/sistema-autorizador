using FluentValidation;
using Microsoft.Extensions.DependencyInjection;
using SPSA.Autorizadores.Aplicacion.Mappings;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace SPSA.Autorizadores.Aplicacion.Extensions
{
    public static class ServiceCollectionExtensions
    {
        public static void AgregarCapaAplicacion(this IServiceCollection services)
        {
            services.AddValidatorsFromAssembly(Assembly.GetExecutingAssembly());

            services.AddAutoMapper(config =>
            {
                config.AddProfile<AplicacionProfile>();
            });
        }
    }
}

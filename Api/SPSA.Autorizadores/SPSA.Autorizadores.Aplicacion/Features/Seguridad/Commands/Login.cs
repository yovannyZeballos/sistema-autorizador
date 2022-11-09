using AutoMapper;
using Carter;
using Carter.ModelBinding;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Configuration;
using SPSA.Autorizadores.Aplicacion.DTO;
using SPSA.Autorizadores.Dominio.Contrato.Repositorio;
using SPSA.Autorizadores.Dominio.Entidades;

namespace SPSA.Autorizadores.Aplicacion.Features.Seguridad.Commands
{
    public class Login : ICarterModule
    {
        public void AddRoutes(IEndpointRouteBuilder app)
        {
            app.MapPost("api/login", async (HttpRequest req, IMediator mediator, LoginCommand command) =>
            {
                return await mediator.Send(command);
            })
            .Produces<UsuarioDTO>()
            .WithName(nameof(Login))
            .WithTags(nameof(SegUsuario))
            .Produces(StatusCodes.Status200OK, typeof(UsuarioDTO))
            .ProducesProblem(StatusCodes.Status500InternalServerError)
            .ProducesValidationProblem();
        }
    }

    public class LoginCommand : IRequest<IResult>
    {
        public string Usuario { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }

    public class LogineHandler : IRequestHandler<LoginCommand, IResult>
    {
        private readonly IRepositorioSeguridad _repositorioSeguridad;
        private readonly IMapper _mapper;
        private readonly IValidator<LoginCommand> _validator;
        private readonly IConfiguration _config;

        public LogineHandler(IRepositorioSeguridad repositorioSeguridad, IMapper mapper, IValidator<LoginCommand> validator, IConfiguration config)
        {
            _repositorioSeguridad = repositorioSeguridad;
            _mapper = mapper;
            _validator = validator;
            _config = config;
        }

        public async Task<IResult> Handle(LoginCommand request, CancellationToken cancellationToken)
        {
            var result = _validator.Validate(request);

            if (!result.IsValid)
            {
                return Results.ValidationProblem(result.GetValidationProblems());
            }

            var codigoSistema = Convert.ToInt32(_config["Sistema:Codigo"]);
            var abreviatura = _config["Sistema:Abreviatura"].ToString();
            var usuario = await _repositorioSeguridad.Login(codigoSistema, request.Usuario, request.Password, abreviatura);
            var usuarioDTO = _mapper.Map<UsuarioDTO>(usuario);
            return Results.Ok(usuarioDTO);
        }
    }

    public class LoginValidator : AbstractValidator<LoginCommand>
    {
        public LoginValidator()
        {
            RuleFor(r => r.Usuario).NotEmpty();
            RuleFor(r => r.Usuario).NotEmpty();
        }
    }
}

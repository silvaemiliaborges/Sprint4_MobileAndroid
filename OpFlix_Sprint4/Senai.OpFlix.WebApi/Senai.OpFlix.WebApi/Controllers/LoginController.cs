using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Senai.OpFlix.WebApi.Domains;
using Senai.OpFlix.WebApi.Interfase;
using Senai.OpFlix.WebApi.Repositorios;
using Senai.OpFlix.WebApi.ViewModel;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private IUsuarioRepository UsuarioRepository { get; set; }

        public LoginController()
        {
            UsuarioRepository = new UsuarioRepository();
        }

        [HttpPost]
        public IActionResult Login(LoginViewModel login)
        {
            try
            {
                Usuarios usurioBuscado = UsuarioRepository.BuscarPorEmailESenha(login);
                if (usurioBuscado == null)
                    return NotFound(new { mensagem = "Mehhhhhhhhhh não foi dessa vez, tente novamente mais tarde!" });

                var claims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Email, usurioBuscado.Email),
                    new Claim(JwtRegisteredClaimNames.Jti,usurioBuscado.IdUsuario.ToString()),
                    new Claim("nome", usurioBuscado.Nome),
                    new Claim(ClaimTypes.Role, usurioBuscado.TipoUsuario.Nome),
                    new Claim("Permissao", usurioBuscado.TipoUsuario.Nome)
                    
                };
                var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("opflix-chave-autenticacao"));

                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                var token = new JwtSecurityToken(
                    issuer: "OpFlix.WebApi",
                    audience: "OpFlix.WebApi",
                    claims: claims,
                    expires: DateTime.Now.AddMinutes(30),
                    signingCredentials: creds);

                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token)
                });
            }
            catch (System.Exception ex)
            {
                return BadRequest(new { mensagem = ex.Message });
            }
        }
    }
}
         
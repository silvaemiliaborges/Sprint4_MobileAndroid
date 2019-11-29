using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Senai.OpFlix.WebApi.Domains;
using Senai.OpFlix.WebApi.Repositorios;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]


    public class Usuario : ControllerBase
    {
    private UsuarioRepository UsuarioRepository = new UsuarioRepository();
       
        [HttpPost]
        public IActionResult Cadastrar(Usuarios usuario)
        {
            try
            {
                if (usuario.IdTipoUsuario == null)
                {
                    usuario.IdTipoUsuario = 2;
                }
                UsuarioRepository.Cadastrar(usuario);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensagem = ex });
            }
                
           
        }
        [HttpGet]

        public IActionResult Listar()
        {
            return Ok(UsuarioRepository.Listar());
        }
    }
}

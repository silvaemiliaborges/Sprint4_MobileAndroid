using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Senai.OpFlix.WebApi.Domains;
using Senai.OpFlix.WebApi.Interfase;
using Senai.OpFlix.WebApi.Repositorios;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class PlataformaController : ControllerBase
    {
        private IPlataformaRepository PlataformaRepository { get; set; }

        public PlataformaController()
        {
            PlataformaRepository = new PlataformaRepository();
        }

        [Authorize(Roles = "Administrador")]

        [HttpGet]

        public IActionResult Listar()
        {
            return Ok(PlataformaRepository.Listar());
        }

        [HttpGet("{id}")]
        public IActionResult BuscarPorId(int id)
        {
            try
            {
                Plataformas plataforma = PlataformaRepository.BuscarPorId(id);
                if (plataforma == null)
                    return NotFound();
                return Ok(plataforma);
            }
            catch (Exception ex)
            {
                return BadRequest(new { mesagem = ex.Message });
            }
        }

        [Authorize(Roles = "Administrador")]

        [HttpPost]
        public IActionResult Cadastrar(Plataformas plataforma)
        {
            try
            {
                //int IdPlataforma = Convert.ToInt32(HttpContext.User.Claims.First(x => x.Type == JwtRegisteredClaimNames.Jti).Value);
                //plataforma.IdPlataforma = IdPlataforma;
                //plataforma.Nome = ToString();
                PlataformaRepository.Cadastrar(plataforma);
                return Ok();
            }
            catch (System.Exception ex)
            {
                return BadRequest(new { mensagem = ex.Message });
            }

        }
        [HttpDelete("{id}")]
        public IActionResult Deletar(int id)
        {
            PlataformaRepository.Deletar(id);
            return Ok();
        }

        [Authorize(Roles = "Administrador")]

        [HttpPut]
        public IActionResult Atualizar(Plataformas plataforma)
        {
            try
            {
                Plataformas PlataformaBuscada = PlataformaRepository.BuscarPorId(plataforma.IdPlataforma);
                if (PlataformaBuscada == null)
                    return NotFound();
                PlataformaRepository.Ataulizar(plataforma);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensagem = " Meu querido tente novamente mais tarde!" });
            }
        }
    }
} 
    

 
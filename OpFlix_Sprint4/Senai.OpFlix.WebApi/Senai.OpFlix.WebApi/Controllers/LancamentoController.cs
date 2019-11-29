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

    public class LancamentoController : ControllerBase
    {
        private ILancamentoRepository LancamentoRepository { get; set; }

        public LancamentoController()
        {
            LancamentoRepository = new LancamentoRepository();

        }

        //[Authorize(Roles = "Administrador")]

        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(LancamentoRepository.Listar());
        }

        [Authorize(Roles = "Administrador")]


        [HttpGet("{id}")]
        public IActionResult BuscarPorId(int id)
        {
            try
            {
                Lancamentos lancamento = LancamentoRepository.BuscarPorId(id);
                if (lancamento == null)
                    return NotFound();
                return Ok(lancamento);
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensagem = ex.Message });
            }
        }
        [Authorize(Roles = "Administrador")]

        [HttpPost]
        public IActionResult Cadastrar(Lancamentos lancamento)
        {
            try
            {
                //int IdLancamento = Convert.ToInt32(HttpContext.User.Claims.First(x => x.Type == JwtRegisteredClaimNames.Jti).Value);
                //lancamento.IdLancamento = IdLancamento;
                //lancamento.Nome = ToString();
                LancamentoRepository.Cadastrar(lancamento);
                return Ok();
            }
            catch (System.Exception ex)
            {
                return BadRequest(new { mensagem = ex.Message });
            }
        }
        [Authorize(Roles = "Administrador")]

        [HttpDelete("{id}")]
        public IActionResult Deletar(int id)
        {
            LancamentoRepository.Deletar(id);
            return Ok();
        }


        [Authorize(Roles = "Administrador")]

        [HttpPut]
        public IActionResult Atualizar(Lancamentos lancamento)
        {
            //try
            //{
                Lancamentos LancamentoBuscado = LancamentoRepository.BuscarPorId(lancamento.IdLancamento);
                if (LancamentoBuscado == null)
                    return NotFound();
                LancamentoRepository.Atualizar(lancamento);
                return Ok();
            //}
            //catch (Exception ex)
            //{
            //    return BadRequest(new { mensagem = "Hiiiiiiihhhh!" });
            //}
        }



    }
}

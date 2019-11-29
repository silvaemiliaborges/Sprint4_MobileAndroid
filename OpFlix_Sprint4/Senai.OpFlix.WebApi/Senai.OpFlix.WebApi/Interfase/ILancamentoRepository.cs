using Senai.OpFlix.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.Interfase
{
    public interface ILancamentoRepository
    {
        List<Lancamentos> Listar();

        void Cadastrar(Lancamentos lancamento);

        Lancamentos BuscarPorId(int id);

        void Atualizar(Lancamentos lancamento);

        void Deletar(int id);
    }
}

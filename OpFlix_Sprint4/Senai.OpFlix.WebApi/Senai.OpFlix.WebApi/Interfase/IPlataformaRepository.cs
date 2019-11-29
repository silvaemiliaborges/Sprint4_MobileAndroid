using Senai.OpFlix.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.OpFlix.WebApi.Interfase
{
    public interface IPlataformaRepository
    {
        List<Plataformas> Listar();

        void Cadastrar(Plataformas plataforma);

        Plataformas BuscarPorId(int id);

        void Ataulizar(Plataformas plataforma);

        void Deletar(int id);
    }
}

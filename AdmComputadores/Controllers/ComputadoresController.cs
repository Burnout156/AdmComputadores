using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.IO;
using BibliotecaADMComputadores.Models;

namespace AdmComputadores.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class ComputadoresController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ComputadoresController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Computadores
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Computador>>> GetComputadores()
        {
            return await _context.Computadores.ToListAsync();
        }

        // GET: api/Computadores/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Computador>> GetComputador(int id)
        {
            var computador = await _context.Computadores.FindAsync(id);

            if (computador == null)
            {
                return NotFound();
            }

            return computador;
        }

        // PUT: api/Computadores/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutComputador(int id, Computador computador)
        {
            if (id != computador.ComputadorId)
            {
                return BadRequest();
            }

            _context.Entry(computador).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ComputadorExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Computadores
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ComputadorDTO>> PostComputador(ComputadorDTO computador)
        {
            Computador comp = new Computador(computador);

            _context.Computadores.Add(comp);
            await _context.SaveChangesAsync();

            return Ok();
        }

        // DELETE: api/Computadores/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteComputador(int id)
        {
            var computador = await _context.Computadores.FindAsync(id);
            if (computador == null)
            {
                return NotFound();
            }

            _context.Computadores.Remove(computador);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ComputadorExists(int id)
        {
            return _context.Computadores.Any(e => e.ComputadorId == id);
        }
    }
}

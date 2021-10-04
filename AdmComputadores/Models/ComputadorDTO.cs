using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AdmComputadores.Models
{
    public class ComputadorDTO
    {

        public int? ComputadorId { get; set; }


        public string Marca { get; set; }

        public string Modelo { get; set; }


        public string PlacaMae { get; set; }

   
        public string MemoriaRAM { get; set; }

   
        public string HD { get; set; }

        
        public string MarcaHD { get; set; }


        public string VelocidadeProcessador { get; set; }

       
        public string Foto { get; set; }
    }
}

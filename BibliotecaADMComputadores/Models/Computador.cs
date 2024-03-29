﻿
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BibliotecaADMComputadores.Models
{
    public class Computador
    {
        [Key]
        public int ComputadorId { get; set; }

        [Required]
        [Column(TypeName = "varchar(15)")]
        public string Marca { get; set; }

        [Required]
        [Column(TypeName = "varchar(15)")]
        public string Modelo { get; set; }

        [Required]
        [Column(TypeName = "varchar(15)")]
        public string PlacaMae { get; set; }

        [Required]
        [Column(TypeName = "varchar(30)")]
        public string MemoriaRAM { get; set; }

        [Required]
        [Column(TypeName = "varchar(30)")]
        public string HD { get; set; }

        [Required]
        [Column(TypeName = "varchar(30)")]
        public string MarcaHD { get; set; }

        [Required]
        [Column(TypeName = "varchar(30)")]
        public string VelocidadeProcessador { get; set; }

        [Required]
        [Column(TypeName = "varchar(max)")]
        public string Foto { get; set; }

        public Computador()
        {
            
        }

        public Computador(ComputadorDTO dTO)
        {
            Marca = dTO.Marca;
            Modelo = dTO.Modelo;
            PlacaMae = dTO.PlacaMae;
            MemoriaRAM = dTO.MemoriaRAM;
            HD = dTO.HD;
            MarcaHD = dTO.MarcaHD;
            VelocidadeProcessador = dTO.VelocidadeProcessador;
            Foto = dTO.Foto;               
        }
    }
}

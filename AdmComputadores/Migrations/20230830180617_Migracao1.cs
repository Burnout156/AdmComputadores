using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AdmComputadores.Migrations
{
    public partial class Migracao1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Computadores",
                columns: table => new
                {
                    ComputadorId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Marca = table.Column<string>(type: "varchar(15)", nullable: false),
                    Modelo = table.Column<string>(type: "varchar(15)", nullable: false),
                    PlacaMae = table.Column<string>(type: "varchar(15)", nullable: false),
                    MemoriaRAM = table.Column<string>(type: "varchar(30)", nullable: false),
                    HD = table.Column<string>(type: "varchar(30)", nullable: false),
                    MarcaHD = table.Column<string>(type: "varchar(30)", nullable: false),
                    VelocidadeProcessador = table.Column<string>(type: "varchar(30)", nullable: false),
                    Foto = table.Column<string>(type: "varchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Computadores", x => x.ComputadorId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Computadores");
        }
    }
}

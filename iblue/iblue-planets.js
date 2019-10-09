const yargs = require ('yargs')
const chalk = require('chalk')

yargs.usage(chalk.blue.inverse.bold('\nComando para criar planetas')).
    command(
    "add",
    "comando para criar planetas",
        function(){
            yargs
            .command('planeta','Defina seus planetas',() => {
                yargs.
                usage(chalk.blue.inverse.bold('\nComando para definir planetas')).
                command({
                    command:"nome",
                    describe:'Nome do planeta',
                    type:String,
                    demandOption:['add','planeta'],
                }).
                command('clima','Clima do planeta').
                command('terreno','Terreno do planeta').
                demandOption(['nome','clima','terreno']);
                console.log('Seu planeta foi criado\n\tNome:'+yargs.argv.nome+'\n\tClima:'+yargs.argv.clima+'\n\tTerreno:'+yargs.argv.terreno)
            }
            );   
        }
    )

yargs.parse();
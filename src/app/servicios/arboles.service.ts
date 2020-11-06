import {Injectable} from '@angular/core';

@Injectable()
export class ArbolesService{

    private arboles: Arbol[] = [
            {
                nombre: 'Alerce',
                bio: 'Son árboles caducifolios, con hojas aciculares, suaves, verdes, brillantes, en grupos de fascículos de 15 a 40 sobre braquiblastos; las agujas se vuelven amarillas y caen a finales de otoño, saliendo de los árboles deshojados con el invierno. Los alerces miden entre 15 y 50 m de altura',
                img: 'assets/img/alerce.png',
                ubicacion: 'chiloé'
            },
            {
                nombre: 'Arrayan',
                bio: 'Crece en los bosques templados de Chile y Argentina, en especial junto a cursos de agua. En Argentina se distribuye en la zona andina desde el centro de Neuquén, hasta el norte de la provincia del Chubut, y en Chile se distribuye desde la Región de Valparaíso a la de Aysén, es decir de los 33 a 45º latitud sur. ',
                img: 'assets/img/arrayan.png',
                ubicacion: 'chiloé'
            },
            {
                nombre: 'Alamo Chileno',
                bio: 'Es un árbol de hoja caduca que alcanza de 20 a 30 m, aunque en ocasiones puede superar esta altura. Sistema radicular formado por un eje principal fuerte y profundo y una mayoría de raíces superficiales y extendidas. Tronco generalmente derecho, de corteza grisácea pronto resquebrajada en sentido longitudinal, formándose entre las grietas unas costillas negruzcas, a lo que alude el nombre.',
                img: 'assets/img/alamochileno.png',
                ubicacion: 'chiloé'
            },
            {
                nombre: 'Rauli',
                bio: 'El raulí, es una de las especies arbóreas de los bosques Andino-patagónicos de importancia ecológica y económica. Su distribución en Argentina es muy reducida y relativamente fragmentada. Abarca una estrecha franja entre 39º 25´ S y 40º 35´ S que no supera los 40 km en su ancho máximo, siguiendo los valles de las distintas cuencas lacustres de origen glacial. La sobreexplotación de la que fue objeto en el pasado por la calidad de su madera, agravada por sobrepastoreo e incendios forestales recurrentes llevaron a una situación crítica a muchas de las poblaciones de la especie. ',
                img: 'assets/img/rauli.png',
                ubicacion: 'chiloé'
            },
            {
                nombre: 'Coigüe',
                bio: 'Es un árbol frondoso, de corteza castaña-gris oscura, con grandes grietas superficiales y con ramas aplanadas horizontalmente que le dan un aspecto característico. Sus hojas son perennes y coriáceas, tienen un peciolo muy corto y forma de rombo redondeado, con el borde aserrado. Las flores son poco visibles, porque son verdes y miden menos de 5 mm de longitud. En un mismo individuo existen flores masculinas (que tienen anteras rojas) y femeninas y el polen se dispersa por la acción del viento. Nacen de a tres en un pedúnculo a mediados de primavera. ',
                img: 'assets/img/coigue.png',
                ubicacion: 'chiloé'
            },
            {
                nombre: 'Araucaria',
                bio: 'Muchas, sino todas las poblaciones actuales, son relictas.Se encuentran en bosques y estepas, con una afinidad para los sitios expuestos. Estos árboles columnados son fósiles vivientes, de la edad Mesozoica. Los registros fósiles demuestran que el género también estuvo antes en el hemisferio norte hasta el final del período Cretáceo. ',
                img: 'assets/img/araucaria.png',
                ubicacion: 'chiloé'
            }
    ]
    constructor(){
        console.log('servicio esta listo');
    }

    getArboles() {
       return this.arboles;
    }

    getArbol( idx: string){
        return this.arboles[idx]
    }
}

export interface Arbol {
    nombre: string;
    bio: string;
    img: string;
    ubicacion: string;
};
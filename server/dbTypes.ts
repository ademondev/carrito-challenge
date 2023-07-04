/**
 * Type inferred from the JSON response from the API
    Product example from the API => 
    {
      "id": 1,
      "nombre": "HP 500",
      "precio": 1,
      "categoria": "Salud",
      "descripcion": "Sube la vida del mago en 100 unidades",
      "imagen": "http://localhost:3000/Icon1.png"
    }
 */
export interface ProductInterface {
    id: number;
    nombre: string;
    precio: number;
    categoria: string;
    descripcion: string;
    imagen: string;
}
export const RECIPE = `
Esta es la imagen de un plato de comida. Por favor dime qué ingredientes necesito para preparalo y detallame la receta para lograrlo. Además, incluye el nombre del plato, país/ciudad de origen y cualquier otro detalle que consideres relevante
La respuesta SÓLo debe ser un Objeto con la siguiente estructura:
{
  "name": EL NOMBRE DEL PLATO,
  "country": EL PAÍS DE ORIGEN [EMOJI DE LA BANDERA DEL PAISDE ORIGEN],
  "ingredients": [LOS INGREDIENTES NECESARIOS],
  "recipe": LA RECETA DETALLADA
  "details": CUALQUIER OTRO DETALLE QUE CONSIDERES RELEVANTE
}
`

export const RECIPE_CALORIES  = `
Esta es la imagen de un plato de comida.
Por favor dime qué ingredientes conforman el plato, calcula cuanta cantidad de estos hay en la foto e indícame cuántas 
calorías tienen.
También el total de calorías del plato.
Además, señálame esas calorías separadas en macronutrientes (carbohidratos, proteínas y grasas).
La respuesta SÓLo debe ser un Objeto con la siguiente estructura:
{
  "ingredients": [
    {
      "name": EL NOMBRE DEL INGREDIENTE,
      "quantity": LA CANTIDAD DEL INGREDIENTE EN LA FOTO,
      "calories": LAS CALORÍAS DEL INGREDIENTE
    },
    ...LOS OTROS INGREDIENTES
  ],
  "totalCalories": LAS CALORÍAS TOTALES DEL PLATO,
  "macronutrients": {
    "carbohydrates": LAS CALORÍAS DE LOS CARBOHIDRATOS,
    "proteins": LAS CALORÍAS DE LAS PROTEÍNAS,
    "fats": LAS CALORÍAS DE LAS GRASAS
  }

}`
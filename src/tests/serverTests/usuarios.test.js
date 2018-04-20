// Importamos el modulo de funcionalidad de supertest
const request = require('supertest');

// El nivel mas alto de esta suite de testeo la API de los Usuario
describe('La API de los Usuarios', () => {
    // Especificamos el test
    it('Regresa una lista de todos lo usuario', async () =>{
        // Conectamos al servidor para obtener una respuesta
        const respuesta =  await request('http://localhost:8080')
            .get('/api/usuarios/lista')
            .expect(200)
            .expect('Content-Type', /json/);
        // Estos expect son de jest no de supertest
        // Primero: esperamos que el resultado sea un arreglo
        expect(Array.isArray(respuesta.body)).toBe(true);
        // Segundo: esperamos que el arregla tengo algo dentro de el
        expect(respuesta.body.length).toBeGreaterThan(0);
        // Tercero: esperamos que el primer resultado devuelto sea el administrador
        expect(respuesta.body[0].usuario).toBe('administrador'); 
    });
});
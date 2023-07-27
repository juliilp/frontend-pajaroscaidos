export const  convertirFecha=(fechaapi)=> {
    const fecha = new Date(fechaapi);
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const anio = fecha.getFullYear();
  
    const diaStr = dia.toString().padStart(2, '0');
    const mesStr = mes.toString().padStart(2, '0');
  
    return `${diaStr}/${mesStr}/${anio}`;
  }
  

  
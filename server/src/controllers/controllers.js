import database from "../db/database.js";

export const muestrasd = async (req, res) => {
  try {
    let {
      idmuestra,
      codmuestra,
      idempresa,
      idmunicipio,
      idvereda,
      fecha_recepcion,
      contacto_laboratorio,
      convenio,
      idcategoria,
      idequipo,
      idsistema,
      diasfermen,
      frecvolteos,
      idherramientavol,
      idtecnicavol,
      idtecnicasec,
      dias_secado,
      porcen_humedad,
      porcen_fermen,
      peso_muestra,
      idtecnicahum,
      coordenadas,
      epoca_cosecha,
      tipo_analisis,
      idtipoprod,
      idusuario,
      foto_muestra,
      observaciones,
      estado_muestra,
      analista,
      fecha_preplicor,
      fecha_catacion,
      fecha_desecho_granos,
      fecha_desecho_licor,
      nombre_lote,
      numero_lote,
      altura_mar,
      area_hectareas,
      cultivo,
      variedad,
      numarboles_xlote,
      densidad,
      distancia_siembra,
      topografia,
      temp_promedio,
      idasociacion,
      luminosidad
    } = req.body;

    const result = await database.query(
      'INSERT INTO muestras (idmuestra, codmuestra, idempresa, idmunicipio, idvereda, fecha_recepcion, contacto_laboratorio, convenio, idcategoria, idequipo, idsistema, diasfermen, frecvolteos, idherramientavol, idtecnicavol, idtecnicasec, dias_secado, porcen_humedad, porcen_fermen, peso_muestra, idtecnicahum, coordenadas, epoca_cosecha, tipo_analisis, idtipoprod, idusuario, foto_muestra, observaciones, estado_muestra, analista, fecha_preplicor, fecha_catacion, fecha_desecho_granos, fecha_desecho_licor, nombre_lote, numero_lote, altura_mar, area_hectareas, cultivo, variedad, numarboles_xlote, densidad, distancia_siembra, topografia, temp_promedio, idasociacion, luminosidad) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
      [
        
        idmuestra,
        codmuestra,
        idempresa,
        idmunicipio,
        idvereda,
        fecha_recepcion,
        contacto_laboratorio,
        convenio,
        idcategoria,
        idequipo,
        idsistema,
        diasfermen,
        frecvolteos,
        idherramientavol,
        idtecnicavol,
        idtecnicasec,
        dias_secado,
        porcen_humedad,
        porcen_fermen,
        peso_muestra,
        idtecnicahum,
        coordenadas,
        epoca_cosecha,
        tipo_analisis,
        idtipoprod,
        idusuario,
        foto_muestra,
        observaciones,
        estado_muestra,
        analista,
        fecha_preplicor,
        fecha_catacion,
        fecha_desecho_granos,
        fecha_desecho_licor,
        nombre_lote,
        numero_lote,
        altura_mar,
        area_hectareas,
        cultivo,
        variedad,
        numarboles_xlote,
        densidad,
        distancia_siembra,
        topografia,
        temp_promedio,
        idasociacion,
        luminosidad
      ]
    );

    if (result && result.affectedRows !== 0) {
      res.json({ message: 'Muestra agregada correctamente' });
    } else {
      res.json({ message: 'Error al agregar la muestra' });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error al procesar la solicitud', error });
  }
};


export const obtenerMuestraPorId = async (req, res) => {
  try {
    const { idmuestra } = req.params;

    const [muestra] = await database.query('SELECT * FROM muestras WHERE idmuestra = ?', [idmuestra]);

    if (muestra.length > 0) {
      res.json({ muestra: muestra[0] });
    } else {
      res.json({ mensaje: 'Muestra no encontrada' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensaje: 'Error al procesar la solicitud', error });
  }
};

export const consultarMuestras = async (req, res) => {
  try {
    database.query('SELECT * FROM muestras', (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error en el servidor');
      } else {
        res.send(result);
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};


export const actualizarMuestra = async (req, res) => {
  try {
    // const { idmuestra } = req.params;
    
    const {
    idmuestra,
    codigoMuestra,
    idEmpresa,
    idMunicipio,
    idVereda,
    fechaRecepcion,
    contactoLaboratorio,
    convenio,
    idCategoria,
    idEquipo,
    idSistema,
    diasFermen,
    frecVolteos,
    idHerramientaVol,
    idTecnicaVol,
    idTecnicaSec,
    diasSecado,
    porcentajeHumedad,
    porcentajeFermen,
    pesoMuestra,
    idTecnicaHum,
    coordenadas,
    epocaCosecha,
    tipoAnalisis,
    idTipoProd,
    idUsuario,
    fotoMuestra,
    observaciones,
    estadoMuestra,
    analista,
    fechaPrepLicor,
    fechaCatacion,
    fechaDesechoGranos,
    fechaDesechoLicor,
    nombreLote,
    numeroLote,
    alturaMar,
    areaHectareas,
    cultivo,
    variedad,
    numArbolesXLote,
    densidad,
    distanciaSiembra,
    topografia,
    tempPromedio,
    idAsociacion,
    luminosidad
    } = req.body;

    console.log(req.body);

    const updateResult = await database.query(
      `UPDATE muestras SET 
         codmuestra = ?,
         idempresa = ?,
         idmunicipio = ?,
         idvereda = ?,
         fecha_recepcion = ?,
         contacto_laboratorio = ?,
         convenio = ?,
         idcategoria = ?,
         idequipo = ?,
         idsistema = ?,
         diasfermen = ?,
         frecvolteos = ?,
         idherramientavol = ?,
         idtecnicavol = ?,
         idtecnicasec = ?,
         dias_secado = ?,
         porcen_humedad = ?,
         porcen_fermen = ?,
         peso_muestra = ?,
         idtecnicahum = ?,
         coordenadas = ?,
         epoca_cosecha = ?,
         tipo_analisis = ?,
         idtipoprod = ?,
         idusuario = ?,
         foto_muestra = ?,
         observaciones = ?,
         estado_muestra = ?,
         analista = ?,
         fecha_preplicor = ?,
         fecha_catacion = ?,
         fecha_desecho_granos = ?,
         fecha_desecho_licor = ?,
         nombre_lote = ?,
         numero_lote = ?,
         altura_mar = ?,
         area_hectareas = ?,
         cultivo = ?,
         variedad = ?,
         numarboles_xlote = ?,
         densidad = ?,
         distancia_siembra = ?,
         topografia = ?,
         temp_promedio = ?,
         idasociacion = ?,
         luminosidad = ?
       WHERE idmuestra = ?`,
      [
    codigoMuestra,
    idEmpresa,
    idMunicipio,
    idVereda,
    fechaRecepcion,
    contactoLaboratorio,
    convenio,
    idCategoria,
    idEquipo,
    idSistema,
    diasFermen,
    frecVolteos,
    idHerramientaVol,
    idTecnicaVol,
    idTecnicaSec,
    diasSecado,
    porcentajeHumedad,
    porcentajeFermen,
    pesoMuestra,
    idTecnicaHum,
    coordenadas,
    epocaCosecha,
    tipoAnalisis,
    idTipoProd,
    idUsuario,
    fotoMuestra,
    observaciones,
    estadoMuestra,
    analista,
    fechaPrepLicor,
    fechaCatacion,
    fechaDesechoGranos,
    fechaDesechoLicor,
    nombreLote,
    numeroLote,
    alturaMar,
    areaHectareas,
    cultivo,
    variedad,
    numArbolesXLote,
    densidad,
    distanciaSiembra,
    topografia,
    tempPromedio,
    idAsociacion,
    luminosidad,
    idmuestra
      ]
    );
console.log(req.body);
    if (updateResult.affectedRows !== 0) {
      res.json({ message: 'Muestra actualizada correctamente' });
    } else {
      res.json({ message: 'No se encontró la muestra para actualizar' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al procesar la solicitud', error });
  }
};



export const eliminarMuestra = async (req, res) => {
  try {
    const { idmuestra} = req.params;

    const deleteResult = await database.query('DELETE FROM muestras WHERE idmuestra = ?', [idmuestra]);

    if (deleteResult.affectedRows !== 0) {
      res.json({ message: 'Muestra eliminada correctamente' });
    } else {
      res.json({ message: 'No se encontró la Muestra para eliminar' });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error al procesar la solicitud', error });
  }
};

/*export const eliminarMuestras = (req, res) => {
  const idmuestra = req.params.idmuestra;

  // Asegúrate de que idmuestra sea un número
  const idMuestraNumero = parseInt(idmuestra);

  // Modificamos la consulta SQL para desactivar la muestra en lugar de eliminarla
  database.query('UPDATE muestras SET activo = 0 WHERE idmuestra=?', [idMuestraNumero], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error en el servidor');
    } else {
      res.send({ mensaje: 'Muestra desactivada exitosamente' });
    }
  });
};*/
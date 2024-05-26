const Validation = (userData) => {
    const errors = {};
    if (!/^([a-zA-Z0-9._-])+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userData.email)) {
      errors.email = 'El email ingresado no es válido';
    }
    if (!userData.email) {
      errors.email = 'Debe ingresar un email';
    }
    if (userData.email.length > 35) {
      errors.email = 'El email no debe superar los 35 caracteres';
    }
    if(!/.*\d+.*/.test(userData.password)){
        errors.password='La contraseña deba contener al menos un numero'
        if(userData.password.length<6 ||  userData.password.length>10){
                 errors.password='La contraseña debe tener un tamaño entre 6 y 10 caracteres'
        }
    }
    return { name: 'email', ...errors };
  };
  
  export default Validation;
  
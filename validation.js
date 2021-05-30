// validation script here
const input = document.querySelectorAll('input');

const patterns = {
  telephone: /^\d[11]$/
};

// validation function
function validate(field,regex) {
    if(regex.test(field.value)){
      field.className = 'valid';
      } else {
        field.className = 'invlaid';
    }
}

inputs.forEach((input) => {
  input.addEventListener('keyup', (e) => {
    //console.log(e.target.attributes.name.value);
    validate(e.target, patterns['telephone'])
  });
});

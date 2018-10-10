
            var nb_random = Math.floor(Math.random() * 101);
            var bouton = document.getElementById('clickme');
             
             
            bouton.addEventListener('click', function(e){
                e.preventDefault();
                var valeur_saisie = document.getElementById('nb');
                var saisie = parseInt(valeur_saisie.value);
                 
                 console.log(nb_random)
                        if(saisie < nb_random)
                        {
                            document.getElementById('res').innerHTML = "Trop petit.";
                                         
                        }else
                        if(saisie > nb_random)
                        {
                            document.getElementById('res').innerHTML = "Trop grand.";
                             
                        }
                        else
                        {
                            document.getElementById('res').innerHTML = "Gagné !";
                            alert('Le nombre tirer au hasard était : ' + nb_random);
                             
                             
                        }
                 
 
 
                 
            }, false);
        

    document.getElementById('share-btn').onmouseover = function () {
      if (document.getElementById('list-icons-social-midias').style.display == 'none') {
        document.getElementById('list-icons-social-midias').style.display = 'inline-block';
      }

    }

    document.getElementById('list-icons-social-midias').onmouseleave = function (){
      if (document.getElementById('list-icons-social-midias').style.display == 'inline-block')
        document.getElementById('list-icons-social-midias').style.display = 'none'
      } 



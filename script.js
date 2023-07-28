const accordion = document.querySelectorAll('.accordion-conteiner .box')

for(let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.querySelector('.answer').classList.toggle('active')
        this.querySelector('.question').classList.toggle('active')
    })
}


/*example me permettant de faire ce quil faut  
  <script type="text/javascript">
    	var faq = document.querySelectorAll('.faq li');
    	for (var i = 0; i < faq.length; i++) {
    		faq[i].addEventListener('click', function() {
    			this.querySelector('.answer').classList.toggle('show');
    		});
    	}
    </script>

</body>
</html> */
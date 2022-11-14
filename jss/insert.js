class MyHeader extends HTMLElement {
	connectedCallback() {
		this.innerHTML=`
		
				<h3>Header1</h3>
					<p>Naglowek</p>
		`
	} 	
}

customElements.define(`my-header`, MyHeader)







class MyFooter extends HTMLElement {
	connectedCallback() {
		this.innerHTML=`
		
				<h3>Voce patria fortiter</h3>
				<p>Dzi�kuj� tobie za ka�de serdeczne spojrzenie, �yczliwy u�miech, s�owo zach�ty i wsparcia. Nie zapomn� o nich.<br>Pami�tam.
					<!--Ta strona istnieje dlatego, �e szukam odpowiedzi na pytanie, czy te litery zdolne s� napisa� jak�� pie��, ocali� jak�� pami��, przywr�ci� jakie� dobro, wreszcie: czy poezja mo�e zbawia�. Mnie lub Ciebie, kimkolwiek jeste�, Drogi Czytelniku.  --></p>
		`
	} 	
}

customElements.define("my-footer", MyFooter)
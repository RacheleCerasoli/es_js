const firstYearCompleted = true;
const yearsCompleted = 1;

//Il doppio uguale è un operatore di uguaglianza non stretta, prima di valutare l'uguaglianza dei tipi effettua una conversione.
yearsCompleted == firstYearCompleted
console.log(yearsCompleted == firstYearCompleted);

//Il triplo uguale, è un'operatore di uguaglianza stretta e a differenza del doppio non effettua la conversione ma valuta direttamente il tipo di dati.
yearsCompleted === firstYearCompleted
console.log(yearsCompleted === firstYearCompleted);
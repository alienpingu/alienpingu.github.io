# Funzione Fibonacci
#La funzione in base al valore immesso genera un 
#numero corrispondete alla sequenza di fibonacci
#Sequenza di fibonacci: 1 1 2 3 5 8...
#es. il quarto numero della sequenza di fibonacci è il 3
#
def fibonacci(num): #In base al parametro immesso
    if num <= 1: # Se il parametro è <= 1
        return num #Restituisci lo stesso parametro
    else:# Alreimenti
    	#Restituisci la somma del numero immesso decramentato di 1 
    	#sommato al numero immesso decrementato di 2
        return (fibonacci(num-1) + fibonacci(num-2)) 
#Main program
#Richiedi all' utente di inserire un valore intero
limite = int(input('Inserisci il numero di valori della serie che desideri vedere '))
#Per ogni numero nell'arco tra 1 e il valore immesso (limete) incrementato di 1 esegui...
for num in range(1, limite+1):
    print(fibonacci(num))#Print il risultato della funzione
#Stop
input()
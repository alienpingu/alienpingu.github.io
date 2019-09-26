import os

os.system('color 0a')
os.system('cls')

print(''' FileMover v 0.1
By SamueleMaker''')

path = input('Input path > ')
moveto = input('Output path > ')

def function():
	for element in Inp:
		
		while len(element) < 4:
			element = "0" + str(elem ent)


		

		file = '/IMG_' + str(element) +'.JPG'
		src = path + file
		dst = moveto + file
		os.chdir(path)

		if os.path.exists(src) == True:
			os.rename(src,dst)
			print(f'{file[1:]} spostato')
		else: print(f'{file[1:]} non trovato')
		
		
		



while True:

	Inp = input('''n File >''').split(' ')
	
	function()
	


	
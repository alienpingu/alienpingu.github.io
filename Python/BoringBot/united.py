def CheckFolders():
	num = 100
	while num < 107:
		folder = "CANON" + str(num)
		os.chdir(os.path.join(rootFolder, folder))
		#print(os.path.join(rootFolder, folder))
		IfExistsRename()
		num += 1

#Spostamento 
for elemento in datamove:
	if os.path.exists(elemento) == True: 
		path(elemento)



		os.rename(), os.path.join(os.path.join(rootOutput, cartella), FinalName)
		print(os.path.join(os.path.join(rootOutput, cartella), FinalName))
rootOutput = input(' Output root')
for FinalName in datamove:
	os.rename(os.path.join(rootInput, FinalName), os.path.join(os.path.join(rootOutput, cartella), FinalName))

if not nameForm1 in datamove:
		datamove[nameForm1] = cartella
	
	if not nameForm2 in datamove:
		datamove[nameForm2] = cartella


		print(datamove)

c=1
for elemento in datamove:
	print(f'{c}) {datamove[elemento]} : {elemento}')
	c += 1

if len(element) == 1:
			element = "000" + str(element)
		elif len(element) == 2:
			element = "00" + str(element)
		elif len(element) == 3:
			element = "0" + str(element)


##########
if len(photoNum1) == 1:
		photoNum1 = "000" + str(photoNum1)
	elif len(photoNum1) == 2:
		photoNum1 = "00" + str(photoNum1)
	elif len(photoNum1) == 3:
		photoNum1 = "0" + str(photoNum1)

	if len(photoNum2) == 1:
		photoNum2 = "000" + str(photoNum2)
	elif len(photoNum2) == 2:
		photoNum2 = "00" + str(photoNum2)
	elif len(photoNum2) == 3:
		photoNum2 = "0" + str(photoNum2)
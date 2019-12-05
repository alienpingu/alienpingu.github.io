#Author: alienpingu
#Date: 05 12 2019

#Description:
#This simple program grab the name of some file in a folder (inPath) and check if in 
#the all subDirectory if the file exists and move the file in a new sub folder

import os

print('SPOSTINOBOT')

inPath = (r'WinPath') #Correct with your path
outPath = (r'WinPath')

# GET NAME OF THE PIC TO MOVE
inDB = os.listdir(inPath)
# GET THE NAME OF THE FOLDER THAT MAYBE EXISTS THE TARGET PIC
outDB = os.listdir(outPath)

#FOR LOOP THAT FOR EVERY FOLDER DO...
for folder in outDB: 
	#Create new folder if not exists
	newPath = os.path.join(outPath,folder, 'Scelte') 
	if not os.path.exists(newPath):
		os.makedirs(newPath)
	#Go in folder
	folderPath = os.path.join(outPath,folder)
	os.chdir(folderPath)
	#For every pic in input database do..
	for pic in inDB:
		#If the target pic exists also in this folder
		if os.path.exists(pic) == True:
			picPath = os.path.join(folderPath ,pic)
			destPath = os.path.join(newPath ,pic)
			os.rename(picPath, destPath) #Move the target pic in subfolder


input('Lavoro completato, premi un tasto per uscire. ')







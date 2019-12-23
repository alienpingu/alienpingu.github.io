matriceRettangolare = [[1,2,3],[4,5,6],[7,8,9],[10,11,12]]


def findMaxOfRow(matrix):
	n = 0
	for row in matrix:
		n += 1
		for num in row:
			maxNum = max(row)
		print(maxNum)

findMaxOfRow(matriceRettangolare)
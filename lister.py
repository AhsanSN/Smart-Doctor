
foo = [["disease157","disease34","disease746"],["disease5647","disease59874","disease87845","disease65152","disease57868"],["disease127954","disease245798965","disease24541"]]

def beemar(beemari):
	for i in range(0,len(foo)-1):
		if(len(foo[i])==len(beemari)):
			x = zip(foo[i],beemari)
			return x

print(beemar(["disease5647","disease87845","disease59874","disease65152","disease57868"]))
all:
	rm -r docs/; ~/.cabal/bin/yst; mv site/ docs/

clean:
	rm -r docs/

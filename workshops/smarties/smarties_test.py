#!/usr/bin/python

import unittest

smarties = [{ "color" : "white", "qty" : 5},
    { "color" : "blue", "qty" : 11},
    { "color" : "orange", "qty" : 17},
    { "color" : "pink", "qty" : 6},
    { "color" : "yellow", "qty" : 1},
    { "color" : "red", "qty" : 11},
    { "color" : "black", "qty" : 13},
    { "color" : "yellow", "qty" : 10},
    { "color" : "blue", "qty" : 19},
    { "color" : "brown", "qty" : 15}]

class TestStringMethods(unittest.TestCase):

    def test_find_orange_smarties(self):
	    self.assertEqual(findSmartiesByColor(smarties, "orange"), 17)

    def test_find_smarties_we_have_the_most_off(self):
        self.assertEqual(findMostAbundantSmartie(smarties).color, "blue")

    def test_filter_find_all_less_than_7(self):
        self.assertEqual(len(findSmartiesLessThan(smarties, 7)), 3)

if __name__ == '__main__':
    unittest.main()

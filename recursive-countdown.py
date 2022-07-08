def recursive_countdown(num):
  if (num <= 0):
    return
  else:
    print(num)
    recursive_countdown(num - 1)

recursive_countdown(5) #> 5 4 3 2 1
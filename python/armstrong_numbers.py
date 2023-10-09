# How can you make this more scalable and reusable later?
def find_armstrong_numbers(numbers):
    armstrong=[]
    sum = 0
    for num in range(0, numbers[-1]+1):
        num_str = str(num)
        l = len(num_str)
        for digit in num_str: 
            sum +=int(digit)**l
        if sum == num:
            armstrong.append(num)
        sum=0
    print(armstrong)
    return(armstrong)
find_armstrong_numbers([1000])


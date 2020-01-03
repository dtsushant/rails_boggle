class BoggleUtils


  def lettersForBoggle
    boggleDice = ['AAEEGN', 'ELRTTY', 'AOOTTW', 'ABBJOO', 'EHRTVW', 'CIMOTU', 'DISTTY', 'EIOSST', 'DELRVY', 'ACHOPS', 'HIMNQU', 'EEINSU', 'EEGHNW', 'AFFKPS', 'HLNNRZ', 'DEILRX']

    i = 0
    arr = []
    loop do
      rand = rand(6);
      arr << boggleDice[i].to_s.slice(rand)
      i+=1
      if i >= 16
        break;
      end
    end
    return arr

  end

  def wordScore(word)
    case word.length
    when 3
      score =1
    when 4
      score = 1
    when 5
      score = 2
    when 6
      score = 3
    when 7
      score = 5
    when 8
      score= 11
    else
      score=11
    end

    return score
  end

end
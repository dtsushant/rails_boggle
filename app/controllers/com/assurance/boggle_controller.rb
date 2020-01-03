require 'net/http'
require 'com/assurance/utils/boggle_utils'

class Com::Assurance::BoggleController < ApplicationController

  layout :switch_layout

  def index

  end

  def play

  end




  def lettersForBoard
    b = BoggleUtils.new
    render json: b.lettersForBoggle
  end
#TODO:// create dictionary to check the word online API key not working Credit card needed
  def wordValidator
    print params[:currentWord]

    # the api key didn't work need to register to rapidAPI link,is asking for credit card
    #HTTP.get("https://github.com").to_s

=begin
    uri = URI('https://webspellchecker-webspellcheckernet.p.rapidapi.com/ssrv.cgi')
    req = Net::HTTP::Get.new(uri)

    req['x-rapidapi-host'] = "webspellchecker-webspellcheckernet.p.rapidapi.com"
    req['x-rapidapi-key'] = "46bca383efmsh1fdbe7cce97066ap1b3476jsn2dc7e69af91b"
    req['Accept'] = 'application/json'
    req['Content-Type'] = 'application/json'

    res = Net::HTTP.start(uri.hostname, uri.port) {|http|
      http.request(req)
    }
=end


    # will need to create custom dictionary, for now randomly validating word
    rand1 = rand(2)
    score =0
    print "the rand no is #{rand1}"

    if(rand1==1)
      b = BoggleUtils.new
      score = b.wordScore(params[:currentWord])
    end
    render json: { value: rand1==0?'false' : 'true', word: params[:currentWord], score: score}
  end

  def test

  end

  def something

  end

  private
  def switch_layout
    @_action_name != 'test' || @_action_name != 'something'?'layout_boggle':'layout_redux_test'
  end

end

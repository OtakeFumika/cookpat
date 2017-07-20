class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def review_average
    average = self.reviews.average(:rate).to_f
    (average.round(1) * 20).to_i
  end
end

class Step < ApplicationRecord
  belongs_to :recipe, optional: true
  mount_uploader :step_image, StepImageUploader
end

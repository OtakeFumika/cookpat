class Recipe < ApplicationRecord
  belongs_to :user
  has_many :steps, dependent: :destroy
  accepts_nested_attributes_for :steps, reject_if: :reject_steps, allow_destroy: true
  has_many :ingredients, dependent: :destroy
  accepts_nested_attributes_for :ingredients, reject_if: :reject_ingredients, allow_destroy: true
  mount_uploader :dish_image, DishImageUploader

  def reject_steps(attributes)
    exists = attributes[:id].present?
    empty = attributes[:how_to].blank?
    attributes.merge!(_destroy: 1) if exists && empty
    !exists && empty
  end

  def reject_ingredients(attributes)
    exists = attributes[:id].present?
    empty = attributes[:name].blank?
    attributes.merge!(_destroy: 1) if exists && empty
    !exists && empty
  end
end

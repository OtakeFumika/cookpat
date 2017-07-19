class User < ApplicationRecord
  has_many :recipes
  has_many :reviews
  mount_uploader :image, ImageUploader
  enum sex: { 女性: '0', 男性: '1'}
  validates :name, presence: true, length: { maximum: 50}
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  validates :mail, presence: true, length: { maximum: 255},
              format:{ with: VALID_EMAIL_REGEX}, uniqueness: true
  validates :birth_year, presence: true
  validates :birth_month, presence: true
  validates :birthday, presence: true
  validates :postnum, presence: true, length: { maximum: 7, minimum: 7}
  has_secure_password
  validates :password, length: { minimum: 8, if: :validate_password? },
              confirmation: {if: :validate_password?}
private

  def validate_password?
    password.present? || password_confirmation.present?
  end
end

class User < ApplicationRecord
  enum sex: { 女性: '0', 男性: '1'}
  has_secure_password
end

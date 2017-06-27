class User < ApplicationRecord
  enum sex: { 女性: '0', 男性: '1'}
end

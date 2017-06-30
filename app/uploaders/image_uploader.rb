class ImageUploader < CarrierWave::Uploader::Base
  include CarrierWave::MiniMagick

  storage :file

  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

version :user_icon do
  process resize_to_limit: [60, 60]

  def full_filename for_file
    'user_icon.jpg'
  end
end

    version :thumb do
      process resize_to_fit: [24, 24]

      def full_filemame for_file
        'thumb.jpg'
      end
    end

  def extension_white_list
    %w(jpg jpeg gif png)
  end
end

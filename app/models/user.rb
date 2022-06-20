class User < ApplicationRecord
    attr_reader :password

    validates :fname, :lname, :email, :session_token, :password_digest, presence: true
    validates :password, length: { minimum: 6, allow_nil: true }
    validates :email, :session_token, uniqueness: true
    
    before_validation :ensure_session_token

    # SPIRE
    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    private
    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end
end

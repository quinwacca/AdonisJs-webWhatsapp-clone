'use strict'

const Authorization = use('App/Services/Authorization')

class Profile {

  register (Model) {

    Model.editProfile = async (request, auth, userId) => {

      const user = await auth.getUser()

      Authorization.check(userId, user)

      const { username } = request.all();

      user.merge({ username })

      await user.save()

      return { 
        status: 'User edited successfully',
        user
      }

    }

  }

}

module.exports = Profile
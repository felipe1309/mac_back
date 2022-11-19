import { UploadApiResponse, v2 as cloudinary } from 'cloudinary'
cloudinary.config({
  api_key: '847589772392122',
  api_secret: 'lqbgPPkEQ2_dqXFsYLMPSguZk8U',
  cloud_name: 'dep8wfx4t'
})
export const uploadImage = async (filePath: string): Promise<UploadApiResponse> => {
  const uplaoad = await cloudinary.uploader.upload(filePath, {
    folder: 'mac_test'
  })
  return uplaoad
}

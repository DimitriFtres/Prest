package be.prest.Service;

import be.prest.Service.Interface.*;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.format.annotation.*;
import org.springframework.stereotype.Service;
import org.springframework.util.FileSystemUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.*;
import java.time.*;
import java.time.format.*;
import java.util.*;
import java.util.stream.Stream;
import java.util.zip.*;

@Service
public class StorageServiceImpl implements StorageService {
    private final Path root = Paths.get("uploads");

    @Override
    public void init() {
        try {
            Files.createDirectory(root);
            System.out.println("[FILE MANAGER] Root folder created successfully");
        } catch (IOException e) {
            System.out.println("[FILE MANAGER] Folder already exists");
            // throw new RuntimeException("[FILE MANAGER] Could not initialize folder for upload!");
        }
    }
    @Override
    public String save(MultipartFile file) {
        try {
            init();
            LocalDateTime now = LocalDateTime.now();
            DateTimeFormatter format = DateTimeFormatter.ofPattern("yyyyMMddHHmmss");

            String completeName = file.getOriginalFilename();
            String name = completeName.substring(0, completeName.indexOf('.'));
            String extension = completeName.substring(completeName.indexOf('.'), completeName.length());
            Path imagePath = this.root.resolve(name + now.format(format) + extension);
            Files.copy(file.getInputStream(), imagePath);

            System.out.println("file : " + imagePath.toString());
            if(imagePath.getFileName() != null)
                return imagePath.getFileName().toString();
            else
                return "";
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public Resource load(String filename) {
        try {
            Path file = root.resolve(filename);
            Resource resource = new UrlResource(file.toUri());
            if (resource.exists() || resource.isReadable()) {
                return resource;
            } else {
                throw new RuntimeException("[FILE MANAGER] Could not read the file!");
            }
        } catch (MalformedURLException e) {
            throw new RuntimeException("[FILE MANAGER] Error: " + e.getMessage());
        }
    }

    @Override
    public void deleteAll() {
        FileSystemUtils.deleteRecursively(root.toFile());
    }

    @Override
    public Stream<Path> loadAll() {
        try {
            return Files.walk(this.root, 1).filter(path -> !path.equals(this.root)).map(this.root::relativize);
        } catch (IOException e) {
            throw new RuntimeException("[FILE MANAGER] Could not load the files!");
        }
    }

    public String getEncode64(String filename)
    {
        try {
            return Base64.getEncoder().withoutPadding().encodeToString(
                    Files.readAllBytes(this.load(filename).getFile().toPath()));
        } catch (IOException e) {
            e.printStackTrace();
        }
        return "";
    }

    // compress the image bytes before storing it in the database
    public byte[] compressBytes(byte[] data) {
        Deflater deflater = new Deflater();
        deflater.setInput(data);
        deflater.finish();

        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
        byte[] buffer = new byte[1024];
        while (!deflater.finished()) {
            int count = deflater.deflate(buffer);
            outputStream.write(buffer, 0, count);
        }
        try {
            outputStream.close();
        } catch (IOException e) {
        }
        System.out.println("Compressed Image Byte Size - " + outputStream.toByteArray().length);

        return outputStream.toByteArray();
    }

    // uncompress the image bytes before returning it to the angular application
    public byte[] decompressBytes(byte[] data) {
        Inflater inflater = new Inflater();
        inflater.setInput(data);
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
        byte[] buffer = new byte[1024];
        try {
            while (!inflater.finished()) {
                int count = inflater.inflate(buffer);
                outputStream.write(buffer, 0, count);
            }
            outputStream.close();
        } catch (IOException ioe) {
        } catch (DataFormatException e) {
        }
        return outputStream.toByteArray();
    }
}
